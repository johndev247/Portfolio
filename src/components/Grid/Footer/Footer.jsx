import React from "react";
import {
  CopyRight,
  Facebook,
  GitHub,
  Icons,
  Instagram,
  SocialIcons,
  Twitter,
  FooterItems,
} from "../Footer/footer.style";
import { FooterGrid } from "../../../styles/grid.style";

import { FooterBox } from "./footer.style";

const Footer = () => {
  return (
    <>
      <FooterGrid>
        <FooterBox>
          <FooterItems>
            <CopyRight> &copy; John {new Date().getFullYear()}</CopyRight>
            <SocialIcons>
              <Icons>
                <Facebook />
              </Icons>
              <Icons>
                <Instagram />
              </Icons>
              <Icons>
                <Twitter />
              </Icons>
              <Icons>
                <GitHub />
              </Icons>
            </SocialIcons>
          </FooterItems>
        </FooterBox>
      </FooterGrid>
    </>
  );
};

export default Footer;
