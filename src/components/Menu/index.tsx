import { Dispatch, SetStateAction, useRef, useState } from "react";
import { MENU_OPTIONS, MenuOption } from "../../config/menu";
import {
  MenuOptionButtonElement,
  MenuOptionsWrapper,
  MenuOptionImposterElement,
  MenuWrapper,
  MenuOptionWrapper,
} from "./styles";
import { useAnimate } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  close: () => void;
}

const Menu = ({ isOpen, close }: MenuProps) => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<MenuOption | undefined>();
  const [clipHeight, setClipHeight] = useState(0);

  if (optionsRef.current) {
    optionsRef.current.style.setProperty("--start", `${clipHeight}px`);
    optionsRef.current.style.opacity = hoveredItem ? "1" : "0";
  }

  return (
    <MenuWrapper isOpen={isOpen} onClick={close}>
      <div style={{ position: "relative" }}>
        <MenuOptionsWrapper>
          {MENU_OPTIONS.map((item) => {
            const isHovered = hoveredItem?.name === item.name;
            return (
              <MenuOptionWrapper
                onPointerEnter={() => setHoveredItem(item)}
                onPointerLeave={() => setHoveredItem(undefined)}
              >
                <MenuOptionImposter item={item} isHovered={isHovered} />
              </MenuOptionWrapper>
            );
          })}
        </MenuOptionsWrapper>
        <MenuOptionsWrapper ref={optionsRef}>
          {MENU_OPTIONS.map((item) => {
            const isHovered = hoveredItem?.name === item.name;
            return (
              <MenuOptionWrapper
                onPointerEnter={() => setHoveredItem(item)}
                onPointerLeave={() => setHoveredItem(undefined)}
              >
                <MenuOptionButton
                  setClipHeight={setClipHeight}
                  item={item}
                  key={item.name}
                  isHovered={isHovered}
                />
              </MenuOptionWrapper>
            );
          })}
        </MenuOptionsWrapper>
      </div>
    </MenuWrapper>
  );
};

interface MenuOptionImposterProps {
  item: MenuOption;
  isHovered: boolean;
}

const MenuOptionImposter = ({ item, isHovered }: MenuOptionImposterProps) => {
  const { name } = item;

  const [scope, animate] = useAnimate();

  const animateBouncyScale = () => {
    animate([
      [scope.current, { scale: 1.4 }, { duration: 0.025 }],
      [scope.current, { scale: 1.2 }, { duration: 0.05 }],
    ]);
  };

  const resetScale = () => {
    animate([[scope.current, { scale: 1 }, { duration: 0.025 }]]);
  };

  if (isHovered) {
    animateBouncyScale();
  } else {
    resetScale();
  }

  return (
    <MenuOptionImposterElement ref={scope} isHovered={isHovered}>
      {name}
    </MenuOptionImposterElement>
  );
};

interface MenuOptionButtonProps {
  item: MenuOption;
  isHovered: boolean;
  setClipHeight: Dispatch<SetStateAction<number>>;
}

const MenuOptionButton = ({
  item,
  isHovered,
  setClipHeight,
}: MenuOptionButtonProps) => {
  const { name } = item;

  const [scope, animate] = useAnimate();

  const animateBouncyScale = () => {
    const controls = animate([
      [scope.current, { scale: 1.4 }, { duration: 0.025 }],
      [scope.current, { scale: 1.2 }, { duration: 0.05 }],
    ]);

    console.log(controls);
  };

  const resetScale = () => {
    animate([[scope.current, { scale: 1 }, { duration: 0.025 }]]);
  };

  if (isHovered) {
    animateBouncyScale();
    const top =
      (scope.current as HTMLButtonElement).getBoundingClientRect().top - 400;
    setClipHeight(Math.floor(top));
    console.log();
  } else {
    resetScale();
  }

  return (
    <MenuOptionButtonElement ref={scope} isHovered={isHovered}>
      {name}
    </MenuOptionButtonElement>
  );
};

export default Menu;
