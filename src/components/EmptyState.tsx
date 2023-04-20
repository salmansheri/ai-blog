'use client'; 

interface EmptyStateProps {
    title?: string; 
    desc?: string; 
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    desc,
}) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">

        <h1 className="text-3xl font-bold">{title}</h1>
        <h5 className="text-xl font-semibold">{desc}</h5>
        </div>
    )
}

export default EmptyState; 