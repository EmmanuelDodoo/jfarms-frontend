type DividerProps = {
  margin?: number;
};

/** Create a horizontal divider with given top and bottom margins.
 * Margin defaults to 3 if none is provided
 */
export default function HorDivider({ margin }: DividerProps) {
  const mgn = margin === undefined ? " my-3 " : ` my-${margin} `;
  return (
    <div
      className={
        "h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-1 " +
        mgn
      }
    ></div>
  );
}
