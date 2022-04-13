import { BanIcon } from "@heroicons/react/outline";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../../context/UserProvider";
import { OAUTH_ENTRYPOINT } from "../../utils/constants";
import { Nico } from "../../utils/nico";
import { profilePic } from "../../utils/parsers";

export default function UserIcon() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, setUser } = useUser();

  return (
    <>
      <button
        type="button"
        id="user-menu-button"
        className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={user ? handleClick : () => router.push(OAUTH_ENTRYPOINT)}
      >
        {user ? (
          <Image
            src={profilePic(user.user)}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          "Login"
        )}
      </button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <BanIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </ListItemIcon>
            <ListItemText
              onClick={
                user
                  ? () => {
                      Nico.post("/oauth/logout").then(() => {
                        setUser(null);
                      });
                    }
                  : () => router.push(OAUTH_ENTRYPOINT)
              }
            >
              {user ? "Logout" : "Login"}
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
