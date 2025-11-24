interface Props {
    name: string;
}

const TechnologyBadge = ({name}: Props) => {
    return (
        <div className={"bg-black text-white py-1 px-3 rounded-xl"}>
            {name}
        </div>
    );
};

export default TechnologyBadge;