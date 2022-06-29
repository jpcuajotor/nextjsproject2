import MenuItem from "./MenuItem";

interface ItemProps {
  name: string;
  link: string;
  img_name: string;
}

interface NavigationMenuProps {
  menuItems: ItemProps[];
  selectedItem: string;
}

const NavigationMenu = ({ menuItems, selectedItem }: NavigationMenuProps) => {
  return (
    <div className="px-4 pb-6 pt-2 drop-shadow-md border-t border-gray-300 bg-white">
      <div className="flex justify-around">
        {menuItems.map((item: ItemProps, idx) => (
          <MenuItem
            name={item.name}
            link={item.link}
            img_name={item.img_name}
            key={idx}
            selected={item.link === selectedItem}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
