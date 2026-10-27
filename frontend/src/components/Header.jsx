import { Box, Stack, Typography, InputLabel, Select, MenuItem } from '@mui/material'
const Header = () => {
  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <Box>
        <Typography variant='h1'>Board Game Assistant</Typography>
        <Typography variant='body1'>
          Your friendly board game scoring assitant. More features to be added in time.
        </Typography>
      </Box>
    </Stack>
  )
}
export default Header
