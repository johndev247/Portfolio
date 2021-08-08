import React, {useState, forwardRef, useImperativeHandle} from "react";
import {AiOutlineContacts} from "react-icons/ai";
import {FiBook} from "react-icons/fi";
import {GiSkills} from "react-icons/gi";
import {IoMdApps} from "react-icons/io";

import {
  LeftBar,
  LeftSideNav,
  LeftSideAvatar,
  Avatar,
  LeftSideMenu,
  LeftSidLine,
  LeftSideMenuItem,
  LeftSideIcons,
  LeftSideMenuList,
  LeftSideFooter,
  LeftSideCopyright,
  MenuLink,
  SideSocialIcons,
} from "./leftSide.style";
import {MobileExit} from "../../MobileMenus/mobileMenus.style";
import {LeftSideGrid} from "../../../styles/grid.style";
import AvatarPic from "../../../images/Passport.jpg";
import {Container} from "../../../styles/globalStyles";
import {Home} from "@material-ui/icons";
import {Links} from "../../../styles/globalStyles";

import {Facebook, GitHub, Instagram, Twitter} from "../Footer/footer.style";
import {Icons} from "../Footer/footer.style";

const LeftSideBar = forwardRef((props, ref) => {
  const [hide, setHide] = useState(true);
  const hideMenu = () => setHide(true);
  const showMenu = () => setHide(false);

  useImperativeHandle(ref, () => {
    return {
      showMenu: showMenu,
      hideMenu: hideMenu,
    };
  });

  return (
    <>
      <LeftSideGrid hide={hide}>
        <LeftBar>
          <LeftSideNav>
            <MobileExit hide={hide} onClick={hideMenu} />
          </LeftSideNav>
          <LeftSideAvatar>
            <Avatar src={AvatarPic} />
          </LeftSideAvatar>
          <LeftSideMenu>
            <LeftSidLine />
            <Container>
              <LeftSideMenuList hide={hide} onClick={hideMenu}>
                <LeftSideMenuItem>
                  <LeftSideIcons>
                    <Home />
                  </LeftSideIcons>
                  <MenuLink to="/"> HOME</MenuLink>
                </LeftSideMenuItem>
                <LeftSideMenuItem>
                  <LeftSideIcons>
                    <IoMdApps />
                  </LeftSideIcons>
                  <MenuLink to="/portfolio"> PORTFOLIO</MenuLink>
                </LeftSideMenuItem>
                <LeftSideMenuItem>
                  <LeftSideIcons>
                    <FiBook />
                  </LeftSideIcons>
                  <MenuLink to="/resume"> RESUME</MenuLink>
                </LeftSideMenuItem>
                <LeftSideMenuItem>
                  <LeftSideIcons>
                    <GiSkills />
                  </LeftSideIcons>
                  <MenuLink to="/skills"> SKILLS</MenuLink>
                </LeftSideMenuItem>
                <LeftSideMenuItem>
                  <LeftSideIcons>
                    <AiOutlineContacts />
                  </LeftSideIcons>
                  <MenuLink to="/contact"> CONTACT</MenuLink>
                </LeftSideMenuItem>
              </LeftSideMenuList>
            </Container>
          </LeftSideMenu>
          <LeftSideFooter>
            <LeftSideCopyright>
              &copy; John {new Date().getFullYear()}
            </LeftSideCopyright>
            <SideSocialIcons>
              <Icons>
                <Links target="blank" href="https://facebook.com/johndev247/">
                  <Facebook />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://instagram.com/johndev247/">
                  <Instagram />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://twitter.com/johndev247/">
                  <Twitter />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://github.com/johndev247/">
                  <GitHub />
                </Links>
              </Icons>
            </SideSocialIcons>
          </LeftSideFooter>
        </LeftBar>
      </LeftSideGrid>
    </>
  );
});

export default LeftSideBar;
