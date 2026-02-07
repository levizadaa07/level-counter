'use client';

import { useState } from "react";

export default function Home() {
  const [length, setLength] = useState(10);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [password, setPassword] = useState("");

  function gerarSenha() {
    let chars = "";
    if (includeNumbers) chars += "0123456789";
    if (includeLetters) chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (chars === "") {
      setPassword("");
      return;
    }

    let novaSenha = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * chars.length);
      novaSenha += chars[randIndex];
    }

    setPassword(novaSenha);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex w-80 flex-col gap-4 border border-black p-6">
        
        <h1 className="text-center text-lg font-bold">Gerador de Senha</h1>

        {password && (
          <div className="p-2 border border-black text-center font-mono break-words">
            {password}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <span className="text-sm">Número de caracteres: {length}</span>
          <input
            type="range"
            min="1"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="accent-black"
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="accent-black"
          />
          Números
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={includeLetters}
            onChange={(e) => setIncludeLetters(e.target.checked)}
            className="accent-black"
          />
          Letras
        </label>

        <button
          onClick={gerarSenha}
          className="border border-black py-2 hover:bg-black hover:text-white transition"
        >
          Criar
        </button>

      </div>
    </div>
  );
}