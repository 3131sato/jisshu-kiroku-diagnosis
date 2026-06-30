"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { nodeMap, ROOT_NODE_ID, TOTAL_QUESTIONS } from "@/lib/questions";
import { TypeId } from "@/lib/types";
import QuestionCard from "@/components/QuestionCard";
import ProgressIndicator from "@/components/ProgressIndicator";

const STORAGE_KEY = "jisshu-diagnosis-state";

type StoredState = {
  nodeId: string;
  questionNumber: number;
  resultType: TypeId | null;
};

export default function DiagnosisPage() {
  const router = useRouter();
  const [nodeId, setNodeId] = useState<string>(ROOT_NODE_ID);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [resultType, setResultType] = useState<TypeId | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed: StoredState = JSON.parse(raw);
        if (nodeMap.has(parsed.nodeId)) {
          setNodeId(parsed.nodeId);
          setQuestionNumber(parsed.questionNumber);
          setResultType(parsed.resultType);
        }
      } catch {
        // ignore broken state
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const state: StoredState = { nodeId, questionNumber, resultType };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [nodeId, questionNumber, resultType, ready]);

  if (!ready) return null;

  const node = nodeMap.get(nodeId);
  if (!node) return null;

  const handleSelect = (index: number) => {
    const choice = node.choices[index];
    const nextType = choice.resultType ?? resultType;

    if (choice.next === null) {
      sessionStorage.removeItem(STORAGE_KEY);
      router.push(`/result/${nextType}`);
      return;
    }

    setNodeId(choice.next);
    setResultType(nextType);
    setQuestionNumber((n) => Math.min(n + 1, TOTAL_QUESTIONS));
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        <ProgressIndicator current={questionNumber} total={TOTAL_QUESTIONS} />
        <QuestionCard node={node} onSelect={handleSelect} />
      </div>
    </div>
  );
}
