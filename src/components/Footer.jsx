const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      textAlign: 'center',
      padding: '1rem 0',
      backgroundColor: '#0d1117',
      color: '#bbb',
      fontSize: '0.9rem'
    }}>
      © {currentYear} Gourab Dutta. All rights reserved.
    </footer>
  );
};

export default Footer;
