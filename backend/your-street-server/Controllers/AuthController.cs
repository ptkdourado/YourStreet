using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using your_street_server.Data;
using your_street_server.Models;

namespace your_street_server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("login/google")]
    public IActionResult GoogleLogin()
    {
        var redirectUrl = Url.Action(nameof(GoogleCallback), "Auth");
        var properties = new AuthenticationProperties { RedirectUri = redirectUrl };
        return Challenge(properties, GoogleDefaults.AuthenticationScheme);
    }

    [HttpGet("callback/google")]
    public async Task<IActionResult> GoogleCallback()
    {
        var result = await HttpContext.AuthenticateAsync(GoogleDefaults.AuthenticationScheme);
        
        if (!result.Succeeded)
        {
            return BadRequest("Falha na autenticação com Google");
        }

        var googleId = result.Principal.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var email = result.Principal.FindFirst(ClaimTypes.Email)?.Value;
        var name = result.Principal.FindFirst(ClaimTypes.Name)?.Value;
        var picture = result.Principal.FindFirst("picture")?.Value;

        if (string.IsNullOrEmpty(googleId) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(name))
        {
            return BadRequest("Informações incompletas do Google");
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.GoogleId == googleId);
        
        if (user == null)
        {
            // Criar novo usuário
            user = new User
            {
                GoogleId = googleId,
                Email = email,
                Name = name,
                Picture = picture,
                CreatedAt = DateTime.UtcNow,
                LastLoginAt = DateTime.UtcNow
            };
            
            _context.Users.Add(user);
        }
        else
        {
            // Atualizar último login
            user.LastLoginAt = DateTime.UtcNow;
            
            // Atualizar informações caso tenham mudado
            user.Email = email;
            user.Name = name;
            user.Picture = picture;
            
            _context.Users.Update(user);
        }

        await _context.SaveChangesAsync();

        // Aqui você pode implementar JWT ou sessão
        // Para simplicidade, vou apenas retornar os dados do usuário
        return Ok(new
        {
            Id = user.Id,
            GoogleId = user.GoogleId,
            Email = user.Email,
            Name = user.Name,
            Picture = user.Picture
        });
    }

    [HttpPost("logout")]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync();
        return Ok(new { message = "Logout realizado com sucesso" });
    }

    [HttpGet("profile")]
    [Authorize]
    public async Task<IActionResult> GetProfile()
    {
        var googleId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        
        if (string.IsNullOrEmpty(googleId))
        {
            return Unauthorized();
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.GoogleId == googleId);
        
        if (user == null)
        {
            return NotFound("Usuário não encontrado");
        }

        return Ok(new
        {
            Id = user.Id,
            GoogleId = user.GoogleId,
            Email = user.Email,
            Name = user.Name,
            Picture = user.Picture,
            CreatedAt = user.CreatedAt,
            LastLoginAt = user.LastLoginAt
        });
    }
}