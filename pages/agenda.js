import {
    connect,
    reduxWrapper,
    configure,
    Wrapper,
    WidgetPresenters,
    WidgetSchedule
  } from 'eventjuicer-site-components';
  
 
  const settings = require('../settings').default;
  
  const PageList = () => {
  
    return (
    <Wrapper first>
    <WidgetPresenters limit={100} />
    </Wrapper>)
  } 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
    return await configure(props, {
      settings : settings,
      preload : ["report", "bookingmap"]
    })
  })
  
  export default connect()(PageList);