function numberWithCommas(x) {
    console.log(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
}

class HamburgerBTN extends React.Component{

    render(){
        
        return <div className={this.props.class} onClick={this.props.onClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    }
}

class HamburgerMenu extends React.Component{

    render(){
        return <div className={this.props.class}>
            <a href="#">About</a>
            <a href="#">Discover</a>
            <a href="#">Get Started</a> 
        </div>
    }
}


class Header extends React.Component{
    
    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)

        
        this.state = {
            active: 0,
            classBtn: 'HamburgerBtn HideForDesktop',
            classMenu: 'HamburgerMenu HideForDesktop',
            classOverlay: 'overlay'
        }
    }

    toggleClass() {
        const currentState = this.state.active;
        if(this.state.active == 0 || this.state.active==2){
            this.setState({ 
                active: 1,
                classBtn: 'HamburgerBtn HideForDesktop Open',
                classMenu: 'HamburgerMenu HideForDesktop Open slidein',
                classOverlay: 'overlay open fadeIn'
            })
        }
        else if (this.state.active == 1){
            this.setState({ 
                active: 2,
                classBtn: 'HamburgerBtn HideForDesktop',
                classMenu: 'HamburgerMenu HideForDesktop Open slideout',
                classOverlay: 'overlay fadeOut'
            })
        }
        
    }

    render(){
        console.log(this.state.active ? 'HamburgerBtn HideForDesktop Open': 'HamburgerBtn HideForDesktop')
        return <div className="Header">
            <div className="Logo">
            </div>
            <div className="Links HideForTablet">
                <a href="#">About</a>
                <a href="#">Discover</a>
                <a href="#">Get Started</a> 
            </div>
            <HamburgerBTN class={this.state.classBtn} onClick={this.toggleClass}></HamburgerBTN>
            <HamburgerMenu class={this.state.classMenu}></HamburgerMenu>
            <div className={this.state.classOverlay}></div>
        </div>
    }
}

class BackingSection extends React.Component{

    constructor(props){
        super(props)
        this.state = {active: false}
        this.toggleClass = this.toggleClass.bind(this)
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ 
            active: !currentState,
        })
    }

    render(){
        return <div className="Backing_Section">
            <div className="logo">

            </div>
            <h1>
            Mastercraft Bamboo Monitor Riser
            </h1>
            <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div className="action_bar">
                <button className="button">
                Back this project
                </button>
                <div className={this.state.active ? "bookmark active" : "bookmark"} onClick={this.toggleClass}>
                    <div className="icon_bookmark">
                    
                    </div>
                    Bookmark
                </div>
            </div>
        </div>
    }
}

class BackingDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            backed: props.backed,
            backers: props.backers,
            days: props.days,
            progress: props.backed/1000
        }
    }


    render() {
        
        document.documentElement.style.setProperty('--progress', `${this.state.progress}%` )
        return <div className="Backing_Details">
            <div className="infos">
                <div className="column">
                    <strong>${numberWithCommas(this.state.backed)}</strong>
                    <p>of $100,000 backed</p>
                 
                </div>
                <div className="column">
                    <strong>
                        {numberWithCommas(this.state.backers)}
                    </strong>
                    <p>
                        total backers
                    </p>
                </div>
                <div className="column">
                    <strong>
                        {numberWithCommas(this.state.days)}
                    </strong>
                    <p>
                        days left
                    </p>
                </div>
            </div>

            <div className="loading_bar_container">
                <div className="loading_bar_progress">

                </div>
            </div> 
        </div>
    }
}

class BackingItem extends React.Component{
    render(){
        return <div className="Backing_Item">
            
        </div>
    }
}

class BackingMenu extends React.Component{
    render(){
        return <div className="Backing_Menu">
            <h2>About this project</h2>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>
        <br/>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        <BackingItem></BackingItem>
        </div>
    }
}

class Backing extends React.Component{
    render(){
        return <div className = "Block Backing">
            <BackingSection></BackingSection>
            <BackingDetails backed={89914} backers={5007} days={56} ></BackingDetails>
            <BackingMenu></BackingMenu>
        </div>
    }
}

class Page extends React.Component{
    render(){
        return <div>
            <Header></Header>
            <Backing></Backing>
        </div>
    }
}

ReactDOM.render(<Page/>, document.querySelector('#app'))

/*


  

  
  
  Bamboo Stand
  Pledge $25 or more
  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list.
  101 left
  Select Reward

  Black Edition Stand
  Pledge $75 or more
  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.
  64 left
  Select Reward

  Mahogany Special Edition
  Pledge $200 or more
  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.
  0 left
  Out of Stock

  <!-- Selection modal start -->

  Back this project
  Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?

  Pledge with no reward
  Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email.

  Bamboo Stand
  Pledge $25 or more
  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
  you’ll be added to a special Backer member list.
  101 left

  <!-- Selected pledge start -->
  Enter your pledge
  $25
  Continue
  <!-- Selected pledge end -->

  Black Edition Stand
  Pledge $75 or more
  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
  member list. Shipping is included.
  64 left

  <!-- Selected pledge start -->
  Enter your pledge
  $75
  Continue
  <!-- Selected pledge end -->

  Mahogany Special Edition
  Pledge $200 or more
  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
  to our Backer member list. Shipping is included.
  0 left

  <!-- Selected pledge  start -->
  Enter your pledge
  $200
  Continue
  <!-- Selected pledge end -->

  <!-- Selection modal end -->

  <!-- Success modal start -->

  Thanks for your support!
  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.
  Got it!

  <!-- Success modal end -->

*/