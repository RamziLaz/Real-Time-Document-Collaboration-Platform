import { useSupabaseAuth } from "../../hooks/useSupabaseAuth";
import { Button, Input } from "@shadcn/ui";
import { useState } from "react";

export default function Login() {
  const { login, logout, user } = useSupabaseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
  };

  if (user) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p>Welcome, {user.email}</p>
        <Button variant="primary" onClick={logout}>Logout</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary" onClick={handleLogin}>Login</Button>
    </div>
  );
}
