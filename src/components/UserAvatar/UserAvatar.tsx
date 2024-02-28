interface IUserAvatar {
    avatar: string;
}

export const UserAvatar: React.FC<IUserAvatar> = ({ avatar }) => {
    return (
        <div className="border-dashed border-2 rounded-full p-1 border-[#FFC831]">
            <img src={avatar} alt="useravatar" />
        </div>
    );
};
