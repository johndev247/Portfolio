import React from "react";
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

const LeftSideBar = ({hide, hideHandler}) => {
  return (
    <>
      <LeftSideGrid hide={hide}>
        <LeftBar>
          <LeftSideNav>
            <MobileExit hide={hide} onClick={hideHandler} />
          </LeftSideNav>
          <LeftSideAvatar>
            <Avatar src={AvatarPic} />
          </LeftSideAvatar>
          <LeftSideMenu>
            <LeftSidLine />
            <Container>
              <LeftSideMenuList hide={hide} onClick={hideHandler}>
                <MenuLink to="/">
                  <LeftSideMenuItem>
                    <LeftSideIcons>
                      <Home />
                    </LeftSideIcons>
                    HOME
                  </LeftSideMenuItem>
                </MenuLink>
                <MenuLink to="/portfolio">
                  <LeftSideMenuItem>
                    <LeftSideIcons>
                      <IoMdApps />
                    </LeftSideIcons>
                    PORTFOLIO
                  </LeftSideMenuItem>
                </MenuLink>
                <MenuLink to="/resume">
                  <LeftSideMenuItem>
                    <LeftSideIcons>
                      <FiBook />
                    </LeftSideIcons>
                    RESUME
                  </LeftSideMenuItem>
                </MenuLink>
                <MenuLink to="/skills">
                  <LeftSideMenuItem>
                    <LeftSideIcons>
                      <GiSkills />
                    </LeftSideIcons>
                    SKILLS
                  </LeftSideMenuItem>
                </MenuLink>
                <MenuLink to="/contact">
                  <LeftSideMenuItem>
                    <LeftSideIcons>
                      <AiOutlineContacts />
                    </LeftSideIcons>
                    CONTACT
                  </LeftSideMenuItem>
                </MenuLink>
              </LeftSideMenuList>
            </Container>
          </LeftSideMenu>
          <LeftSideFooter>
            <LeftSideCopyright>
              &copy; John {new Date().getFullYear()}
            </LeftSideCopyright>
            <SideSocialIcons>
              <Icons>
                <Links target="blank" href="https://facebook.com/johndev247">
                  <Facebook />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://instagram.com/johndev_247">
                  <Instagram />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://twitter.com/johndev247">
                  <Twitter />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://github.com/johndev247">
                  <GitHub />
                </Links>
              </Icons>
            </SideSocialIcons>
          </LeftSideFooter>
        </LeftBar>
      </LeftSideGrid>
    </>
  );
};

export default LeftSideBar;
