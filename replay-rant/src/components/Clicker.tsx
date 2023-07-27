import { slideNames } from "@/constants";

export default function Clicker({
  count,
  increment,
  decrement,
}: {
  count: number;
  increment: any;
  decrement: any;
}) {
  return (
    <div className="absolute top-4 left-4 group">
      <div className="group-hover:opacity-100">
        Slide: {count} / {slideNames.length}
      </div>
      <div className="flex gap-2">
        <button className="hover:underline" onClick={increment}>
          prev
        </button>{" "}
        -
        <button className="hover:underline" onClick={decrement}>
          next
        </button>
      </div>
    </div>
  );
}
