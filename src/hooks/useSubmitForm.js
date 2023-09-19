/**
 * Accepts comment fields and sends a POST request to API to create a comment
 */
const useSubmitForm = () => {
  /**
   * Sends a POST request to create a comment to the API
   */
  const submitForm = async ({ name, email, content }) => {
    const url = new URL(
      `https://${process.env.GATSBY_API_TOKEN}.mockapi.io/blog/api/comments`
    );

    url.searchParams.append("name", name);
    url.searchParams.append("email", email);
    url.searchParams.append("content", content);

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return 0;
    } catch (err) {
      console.error(err);
      return 1;
    }
  };

  return submitForm;
};

export default useSubmitForm;
