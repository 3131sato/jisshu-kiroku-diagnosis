export type TypeId =
  | "info-lost"
  | "soap-a-stop"
  | "problem-mess"
  | "report-freeze"
  | "record-overload";

export type Choice = {
  label: string;
  explanation: string;
  next: string | null;
  resultType?: TypeId;
};

export type QuestionNode = {
  id: string;
  text: string;
  choices: Choice[];
};

export type TypeContent = {
  id: TypeId;
  name: string;
  catch: string;
  description: string;
  points: string[];
  terakoyaHelp: string[];
};
