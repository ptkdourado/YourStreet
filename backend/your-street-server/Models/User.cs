using System.ComponentModel.DataAnnotations;

namespace your_street_server.Models;

public class User
{
    public int Id { get; set; }
    
    // If user registered with email/password this value may be null
    [MaxLength(255)]
    public string? GoogleId { get; set; }
    
    [Required]
    [MaxLength(255)]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(255)]
    public string Name { get; set; } = string.Empty;
    
    // Hashed password when the user signed up with email; only one of GoogleId or PasswordHash
    [MaxLength(500)]
    public string? PasswordHash { get; set; }
    
    [MaxLength(500)]
    public string? Picture { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public DateTime LastLoginAt { get; set; } = DateTime.UtcNow;
}