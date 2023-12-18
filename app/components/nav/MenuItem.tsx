interface MenutItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const MenutItem: React.FC<MenutItemProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 
    py-3
    hover:bg-netural-100
    transition"
    >
      {children}
    </div>
  );
};

export default MenutItem;
