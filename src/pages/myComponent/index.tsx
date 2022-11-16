import Bottom from '../../components/Bottom'
import Navigation from '../../components/Navigation'
import News from '../../components/News'
import './index.css'

const MyComponent = () => {
  return (
    <div className='my-component-content'>
      <Navigation />
      <News />
      <div className='my-component-main'></div>
      <Bottom />
    </div>
  )
}

export default MyComponent
