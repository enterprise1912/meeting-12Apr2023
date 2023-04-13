import React from "react";

const SearchStatus = ({ userCount }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if ([2, 3, 4].indexOf(lastOne) >= 0 && number < 5 && number < 15)
      return "человека тусанут";
    return number === 1 ? "человек тусанет" : "человек тусанут";
  };

  return (
    <h2>
      <span className={"badge " + (userCount > 0 ? "bg-primary" : "bg-danger")}>
        {userCount > 0
          ? `${userCount + " " + renderPhrase(userCount)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
