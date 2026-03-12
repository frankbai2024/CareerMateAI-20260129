const ServerError = ({ status }) => (
  <div className="relative">
    <div className="absolute left-0 right-0 bg-rose-200 py-2 px-3 text-rose-800 font-sm rounded
                    transform -translate-y-6/5">
      {{
        404: "Invalid Email or Password, please try again",
      }[status] || (<div >{`${[status]}`}:Something went wrong, please try again later.</div>)
      }
    </div>
  </div>
);

export default ServerError;