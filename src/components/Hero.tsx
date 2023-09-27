/** @jsxImportSource theme-ui */
import { Box, Link, Flex, Text, Button, Image } from 'theme-ui'

const images = [
  'https://res.cloudinary.com/dxrjeyjpn/image/private/s--R4LxDDF3--/c_thumb,w_200,g_face/v1/tmra_landing/tmra_example1_yqrbtc.jpg',
  'https://res.cloudinary.com/dxrjeyjpn/image/private/s--vNQosG0l--/c_thumb,w_200,g_face/v1/tmra_landing/tmra_example2_hs3o3d.jpg',
  'https://res.cloudinary.com/dxrjeyjpn/image/private/s--mVwPvN6G--/c_thumb,w_200,g_face/v1/tmra_landing/tmra_voxel_ex2_vabov9.jpg',
  'https://res.cloudinary.com/dxrjeyjpn/image/private/s--iMcrWdhe--/c_thumb,w_200,g_face/v1/tmra_landing/tmra_comicbook_ex2_fdxttr.jpg',
  'https://res.cloudinary.com/dxrjeyjpn/image/private/s--YLolHWMc--/c_thumb,w_200,g_face/v1/tmra_landing/ModernFantasy_ex1_i1bbfa.jpg',
]

const Hero = () => {
  return (
    <Box py={['3','5']} sx={{        
      backgroundImage: 'linear-gradient(90deg, rgba(94,106,80,1) 0%, rgba(93,96,78,1) 50%, rgba(84,106,80,1) 100%);',
      height: ['fit-content']
      }}
    >
      <Flex mx='auto' sx={{width: '80vw', height: '100%'}}>
        <Flex sx={{justifyContent: 'center', alignItems: 'center', gap: '5', flexDirection: ['column', 'column', 'row']}}>
          <Flex sx={{ flexDirection: 'column', width: ['100%', '100%', '30%'], textAlign: ['center', 'start'] }}>
            <Text pb='3' sx={{variant: 'text.heading', fontSize: '6', color: 'background'}}>tmra.ai</Text>
            <Text pb='4' sx={{variant: 'text.subHeading', fontSize: '4', color: 'background'}}>Bring your own unique story to life with the worlds first ai-powered story, prompting, and images /game/.</Text>
            <Link href='https://app.tmra.ai' target='_blank'><Button sx={{width: '100%'}}>Launch TMRA</Button></Link>
          </Flex>
          <Flex sx={{alignItems: 'center', gap: '2', flexWrap: 'wrap', display: ['none', 'flex']}}>
            { images.map((image, index) => {
                return <Image 
                          key={index} 
                          // height={125} 
                          sx={{
                            // width: ['100%', '125px'], 
                            // height: ['auto', '125px'],
                            aspectRatio: '1',
                            maxWidth: ['100px', '100px', '125px'],
                            borderRadius: '10px',
                          }} 
                          src={image} 
                        />
              })
            }
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Hero