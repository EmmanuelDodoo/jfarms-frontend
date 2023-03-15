const Select = (props: any) => {
  return (
    <div className={props.class}>
      <select
        id={props.id}
        name={props.id}
        autoComplete="country-name"
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white 
                                            py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {props.options.map((opt: any) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
