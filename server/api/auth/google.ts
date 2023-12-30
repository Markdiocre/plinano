export default oauth.googleEventHandler({
    config: {
      emailRequired: true
    },
    async onSuccess(event, { user, tokens }) {
      await setUserSession(event, {
        user: {
          googleId: user.id
        }
      })
      return sendRedirect(event, '/')
    },
    // Optional, will return a json error and 401 status code by default
    onError(event, error) {
      console.error('Google OAuth error:', error)
      return sendRedirect(event, '/')
    },
  })