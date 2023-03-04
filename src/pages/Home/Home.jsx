import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Img = styled.img`
  width: 1200px;
  max-height: 500px;
  min-height: 200px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Home = () => {
  return (
    <>
      <div>
        <NavLink to="/products/5">
          <Img
            src="https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/press/news/2019/huawei-p30-huawei-p30-pro-vip-service-offer/1.jpg"
            alt="Phone"
          />
        </NavLink>
        <NavLink to="/products/7">
          <Img
            src="https://www.theinsidersnet.com/site/public/images/pl_12/70/201707/105715_10072017_314_C17_Website_SG_GalaxyBook_US_Banner.jpg"
            alt="Laptop"
          />
        </NavLink>
        <NavLink to="/products/8">
          <Img
            src="https://www.laptop.co.nz/uploads/2/3/9/1/23918965/microsoft-surface-laptop-4-hero_orig.jpg"
            alt="Laptop"
          />
        </NavLink>
      </div>
    </>
  );
};
