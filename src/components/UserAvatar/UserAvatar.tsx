interface IUserAvatar {
    avatar: string;
}

export const UserAvatar: React.FC<IUserAvatar> = ({ avatar }) => {
    return (
        <div className="border-dashed w-[40px] h-auto border-2 rounded-full border-[#FFC831]">
            <img src={avatar} alt="useravatar" />
        </div>
    );
};
