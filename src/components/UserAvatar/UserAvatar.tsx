import useravatar from "/images/icons/useravatar.svg";

export const UserAvatar = () => {
    return (
        <div className="border-dashed border-2 rounded-full p-1 border-[#FFC831]">
            <img src={useravatar} alt="useravatar" />
        </div>
    );
};
