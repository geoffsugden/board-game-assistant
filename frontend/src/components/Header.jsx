import { Box, Stack, Typography, InputLabel, Select, MenuItem } from '@mui/material'
const Header = () => {
  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        pb: 1.5,
      }}>
      <Box>
        <Typography variant='h1'>Board Game Assistant</Typography>
        <Typography variant='body1'>
          Your friendly board game scoring assistant. More features to be added in time.
        </Typography>
      </Box>
    </Stack>
  )
}
export default Header
