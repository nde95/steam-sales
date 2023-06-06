import DiscordButton from "../discord-button/discord-button.component"
import './discord-docs.styles.css'

const DiscordDocs = () => {
    return (
        <>
            <div className="docs-container">
                <div className="intro">
                    <h2>Don't want to check the website every day?</h2>
                    <p>We've made a bot for that!</p>
                </div>
                <div className="middle">
                    <h3>Check the sales right inside your Discord!</h3>
                    <p>Our Discord bot is hooked right into our website, so it provides all the same accurate daily information as we do right here!</p>
                </div>
                <img src="https://i.imgur.com/ofxHn2s.png" alt="discord screenshot" />
                {/* add an image here */}
                <div className="commands">
                    <h3>Our current command list can be found below:</h3>
                    <span className="command-container"><p className="command">!games </p><p>Provides a list of all free to keep games at the time of request with a link right to the Steam page</p></span> <br />
                    <span className="command-container"><p className="command">!dlc </p><p>Provides a list of all free to keep dlc, similar to !games</p></span> <br />
                    <span className="command-container"><p className="command">!helpme </p><p>Displays all current commands inside Discord</p></span> <br />
                    <p>This list is subject to change and grow, we're always looking to improve it so make sure to keep an eye on !helpme</p>
                </div>
                <div className="button-wrapper">
                  <DiscordButton discordText={"Try it out!"} />
                </div>
            </div>
        </>
    )
}

export default DiscordDocs