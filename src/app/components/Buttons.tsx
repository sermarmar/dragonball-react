
interface ButtonProps {
    children: React.ReactNode
    onClick: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, ...rest }) => {

    return (
        <button {...rest} onClick={onClick} disabled={disabled}>
            { children }
        </button>
    );

}