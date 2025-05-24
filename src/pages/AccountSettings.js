import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #E5E7EB;
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 0;
`;

const ProfileSection = styled.div`
  padding: 24px 20px;
  display: flex;
  gap: 16px;
`;

const ProfileImage = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileBadge = styled.div`
  width: 24px;
  height: 24px;
  background: #10B981;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid white;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 16px;
  margin: 0 0 4px 0;
`;

const Email = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0;
`;

const Description = styled.p`
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #111827;
`;

const AccountSettings = () => {
  return (
    <Container>
      <Header>
        <Title>Account Settings</Title>
      </Header>
      
      <ProfileSection>
        <ProfileImage>
          <img src="https://i.pravatar.cc/300" alt="Profile" />
          <ProfileBadge />
        </ProfileImage>
        
        <ProfileInfo>
          <Name>John Smith</Name>
          <Email>user@example.com</Email>
        </ProfileInfo>
      </ProfileSection>
      
      <Description>
        This is a sample profile description. You can update this text with your personal information and bio.
      </Description>
    </Container>
  );
};

export default AccountSettings;