import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Accordion, Text, Heading } from "components/Faq/Accordion";
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => createStyles({
  heading: {
    color: "#fff",
    fontSize: '38px'
  },
  headingBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.8rem',
    alignItems: 'center',
    margin: '.5rem',
    width: '100%',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#ffffff1f',
    borderRadius: '10px',
  },
  text: {
    backgroundColor: '#ffffff00',
    width: '100%',
    padding: '.4rem',
    margin: '.3rem',
    fontSize: '14px',
    color: 'white'
  },
  faqHeading: {
    fontSize: '18px',
    fontWeight: 'normal'
  }
}), { name: "MuiFaqComponent" });

const Faq = () => {

  const classes = useStyles();

  const [state, setState] = useState({

  });

  return (
    <Box id="faq" mx={{ sm: 1, md: 3, lg: 3 }} pt={17} pb={12}>
      <Box sx={{ minHeight: '80vh' }}>
        <Box ml={2} >
          <Typography variant="body1" align="left" className={classes.heading}>
            FAQ
          </Typography>
        </Box>
        <Box>
          <Accordion>
            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>Q: What do you mean real value?</h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A: Along with the chance of a massive sol payout after launch, wehopiums have a solid roadmap of giveaways and incentives to maintain value and interest. Wehopiums will use royalties from second sales to reward holders and competitions to promote collecting on secondary markets!
              </p>
            </Text>

            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>Q: When will the giveaway happen?</h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A: It will occur on a discord live stream 30 days after the final mint from this official website. This gives people a chance to buy and sell on secondary markets and ensures that the team has the funds to deliver. For more information and updates on upcoming giveaways join our discord.
              </p>
            </Text>

            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>Q: Best way to mint a wehopium?</h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A: Best way is from your computer using either the phantom or sollet wallet. To prevent possible scams, only use the website provided in the official links of our discord!
              </p>
            </Text>

            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>
                  Q: How many traits are there?
                </h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A: Wehopiums have a total of 380 traits among the following categories: background, ground, shoes, body, clothes, eyes, mouth, head, arm, holding and accessories.
              </p>
            </Text>

            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>
                  Q: Will there be a secondary market?
                </h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A: Yes, we are working to find the best secondary market for you to buy and sell wehopiums. Join us on discord for updates and announcements.
              </p>
            </Text>

            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>
                  Q: Are the secondary sale royalties?
                </h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A: Yes, 3.5%. These will be used to reward holders and future developments.How the rewards are divided will be voted on my holders in discord. We want the community to be part of wehopiums!
              </p>
            </Text>

            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>
                  Q: Team holdings
                </h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A:The team will hold 100 of the 3010 minted wehopiums. Some will be used for future giveaways, some kept and some airdropped. All will be excluded from any giveaways (we will release a list of our holdings before the livestream for full transparency).
              </p>
            </Text>

            <Heading>
              <div className={classes.headingBox}>
                <h1 className={classes.faqHeading}>
                  Q: Best way to get in touch with the team?
                </h1>
              </div>
            </Heading>
            <Text>
              <p className={classes.text}>
                A: Our discord. (Discord link)
              </p>
            </Text>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;