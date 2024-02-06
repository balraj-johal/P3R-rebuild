import { styled } from "@phntms/css-components";

import css from "./style.module.scss";
import { motion } from "framer-motion";

export const MenuWrapper = styled("div", {
    css: css.MenuWrapper,
    variants: {
        isOpen: {
            true: css.MenuWrapper_IsOpen
        }
    }
})

export const MenuOptionsWrapper = styled("div", {
    css: css.MenuOptionsWrapper
})

export const MenuOptionWrapper = styled("div", {
    css: css.MenuOptionWrapper
})

export const MenuOptionImposterElement = styled("div", {
    css: [css.MenuOption, css.MenuOptionImposterElement],
    variants: {
        isHovered: {
            true: css.isHovered
        }
    }
})

export const MenuOptionButtonElement = styled(motion.button, {
    css: [css.MenuOption, css.MenuOptionButtonElement],
    variants: {
        isHovered: {
            true: css.isHovered
        }
    }
})