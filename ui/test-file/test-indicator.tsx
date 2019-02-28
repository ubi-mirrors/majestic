import React from "react";
import { XCircle, CheckCircle, Circle } from "react-feather";

interface Props {
  status: "passed" | "failed";
}

export default function TestIndicator({ status }: Props) {
  let Icon = Circle;
  let color = "#AC61FF";

  if (status === "passed") {
    Icon = CheckCircle;
    color = "#50E3C2";
  } else if (status === "failed") {
    Icon = XCircle;
    color = "#FF4954";
  }

  return <Icon size={14} color={color} />;
}
