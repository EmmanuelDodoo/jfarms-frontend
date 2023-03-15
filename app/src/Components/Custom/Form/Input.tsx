const LoginInput = (props: any) => {
  return (
    <div className={props.class}>
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3
                                             shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
      />
    </div>
  );
};

export default LoginInput;
