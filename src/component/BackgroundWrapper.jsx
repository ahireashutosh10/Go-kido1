import About from "../pages/About";


const getBackgroundClass = () => {
    switch (location.pathname) {
      case '/':
        return 'bg-home';
      case '/about':
        return 'about-us';
      
    }
  };
  
  // return (
  //   <div className={`main-container ${getBackgroundClass()}`}>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about-us" element={<About />} />
  //       {/* <Route path="/contact" element={<Contact />} /> */}
  //     </Routes>
  //   </div>
  // );
  