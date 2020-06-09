import React from "react"
import "./Dashboard.css"

const Dashboard = props => {
    return (
        <main className="container--dashboard">
            <section className="pageContent">
                <h1>Welcome To The Metro Nashville Softball Association</h1>
                <div className="joinLeague">
                    <a href="">Join Our League</a>
                    <p>Visit the Join Our League link above for more information on becoming a part of MNSA!</p>
                </div>
                <div className="announcements">
                    <h2>Announcements:</h2>
                    <hr></hr>
                    <h3>2020 Spring Season - Postponed to 9/13/20</h3>
                    <p className="announcementInfo">
                        Due to past and recent facts regarding the Covid-19 virus and for the safety of our players, coaches, umpires and fans, the start of the 2020 season has been postponed to September 13th.  This decision was made after much consideration and was not made lightly.  We will do everything we can to be back on that field in September.  Until then, be vigilant is self-care and stay safe!
                    </p>
                    <h3>$$ Bridgestone Fundraising Opportunity $$</h3>
                    <p className="announcementInfo">
                        Members of MNSA, please reach out to Debbie Russell at secretary@mnsasoftball.com for information on how to be involved in this fundraising opportunity!
                    </p>
                </div>
            </section>
        </main>
    )
}
export default Dashboard