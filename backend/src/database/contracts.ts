import { z } from "zod";

const Decision = z.enum(["Pendente", "Aprovado", "Rejeitado"]);

const Categories = z.enum([
  "Densevolvimento",
  "Negócios",
  "IT & Software",
  "Contabilidade e Finanças",
  "Productictividade e Escrítorio",
  "Design",
  "Marketing",
  "Sáude",
  "Música",
]);

const Duration = z.enum(["1-7 Dias", "1-4 Semanas", "3-6 Meses", "6-12 Meses"]);

const Language = z.enum(["Português", "Inglês", "Francês"]);

const Level = z.enum(["Iniciante", "Intermediário", "Avançado"]);

const State = z.enum(["Fazendo", "Terminado"]);

export { Level, Decision, Duration, Categories, Language, State };
