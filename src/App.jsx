import React from 'react';
import Card from './Card/Card';

const App = () => {

  const arrObj = [
    {
      plan : "FREE",
      cost : "$0/Month",
      user : "Single User",
      storage : "100GB Storage",
      public : "Unlimited Public Projects",
      access : "Community Access",
      private : "Unlimited Private Projects",
      support : "Dedicated Phone Support",
      subdomain : "Free Subdomain",
      report : "Monthly Status Reports",
      text1 : "text-muted",
      text2 : "text-muted",
      text3 : "text-muted",
      icon1 : "fas fa-check",
      icon2 : "fas fa-xmark",
      icon3 : "fas fa-xmark"
    },
    {
      plan : "PLUS",
      cost : "$9/Month",
      user : "5 Users",
      storage : "250GB Storage",
      public : "Unlimited Public Projects",
      access : "Community Access",
      private : "Unlimited Private Projects",
      support : "Dedicated Phone Support",
      subdomain : "Free Subdomain",
      report : "Monthly Status Reports",
      text1 : "text-muted",
      text2 : "text-dark",
      text3 : "text-muted",
      icon1 : "fas fa-check",
      icon2 : "fas fa-check",
      icon3 : "fas fa-xmark"
    },
    {
      plan : "PRO",
      cost : "$49/Month",
      user : "Unlimited User",
      storage : "1TB Storage",
      public : "Unlimited Public Projects",
      access : "Community Access",
      private : "Unlimited Private Projects",
      support : "Dedicated Phone Support",
      subdomain : "Free Subdomain",
      report : "Monthly Status Reports",
      text1 : "text-muted",
      text2 : "text-dark",
      text3 : "text-dark",
      icon1 : "fas fa-check",
      icon2 : "fas fa-check",
      icon3 : "fas fa-check"
    },
    
  ];

  return (
    <div>
      <h1 className='text-center mt-5 mb-5 pt5 text-primary'>Subscription Card</h1>
      <Card arrObj={arrObj}/>
    </div>
  );
};

export default App;