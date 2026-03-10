# YourStreet

## Autenticação
A aplicação agora suporta duas formas de login:

* **Google OAuth** (como já existia) usando o fluxo manual implementado em `AuthController`.
* **Email e senha** — usuários podem se cadastrar via `POST /api/auth/register` e fazer login em `POST /api/auth/login`.

### Banco de dados
O modelo `User` foi estendido para incluir um campo `PasswordHash` opcional; `GoogleId` tornou-se nullable. Após atualizar o código, execute:

```bash
cd backend/your-street-server
dotnet ef migrations add AddEmailAuth
dotnet ef database update
```

para aplicar as alterações no esquema.

### Frontend
O card de login (em `src/app/components/ui/LoginCard.tsx`) agora exibe um formulário de email/senha com botões para alternar entre login e registro, mantendo o botão de login com Google.

