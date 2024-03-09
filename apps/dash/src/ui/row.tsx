import {ReactNode} from "react";

type Props = {
  children: ReactNode
}
export function Row({children}: Props) {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {children}
    </div>
  )
}
