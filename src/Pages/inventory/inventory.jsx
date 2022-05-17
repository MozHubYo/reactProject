import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  flex: 7;
`;

const Inventory = () => {
  return (
    <Container>
      <Navigator>
        <NavigatorLeft>
          <NavigatorItem>
            <NavigatorItemList>Home</NavigatorItemList>
            <NavigatorItemList>OPPORTUNITY</NavigatorItemList>
            <NavigatorItemList>SUCCESS STORIES</NavigatorItemList>
          </NavigatorItem>
        </NavigatorLeft>
        <NavigatorRight>
          <SignIn></SignIn>
          <JoiningNow></JoiningNow>
        </NavigatorRight>
      </Navigator>
      <Wrapper>
        <SuccessImg></SuccessImg>
        <SuccessRight>
          <SuccessTitle></SuccessTitle>
          <SuccessDes></SuccessDes>
          <SuccessButtonApply></SuccessButtonApply>
          <SuccessButtonLearn></SuccessButtonLearn>
        </SuccessRight>
      </Wrapper>
      <Wrapper>
        <AdvantageImg></AdvantageImg>
        <AdvantageRight>
          <AdvantageTitle></AdvantageTitle>
          <AdvantageDes></AdvantageDes>
        </AdvantageRight>
      </Wrapper>
      <Wrapper>
        <StoriesLeft>
          <StoriesTitle></StoriesTitle>
          <StoriesDes></StoriesDes>
        </StoriesLeft>
        <StoriesImg></StoriesImg>
      </Wrapper>
      <Wrapper>
        <ApplyLeft>
          <ApplyImg></ApplyImg>
        </ApplyLeft>
        <ApplyRight>
          <ApplyTitle></ApplyTitle>
          <ApplyButton></ApplyButton>
          <ApplyDes></ApplyDes>
        </ApplyRight>
      </Wrapper>
    </Container>
  );
};

export default Inventory;
