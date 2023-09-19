import React, { useState } from "react";
import styled from "styled-components";
import { useSubmitForm } from "../hooks";
import PrimaryButton from "./PrimaryButton";

const FormWrapper = styled.section`
  padding: 130px 0;
  width: 560px;
  margin: 0 auto;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  width: ${({ width }) => width};
  margin-top: 5px;
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text} !important;
  padding: 12px 0 12px 10px;
  font-family: "Poppins";
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const StyledTextarea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text} !important;
  padding: 12px 0 12px 10px;
  font-family: "Poppins";
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 534px;
`;

const StyledForm = styled.form`
  padding-top: 40px;
`;

const InputGroup = styled.div`
  display: flex;
  column-gap: 30px;
  padding-bottom: 30px;
`;

const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const submitForm = useSubmitForm();

  const clearForm = () => {
    setName("");
    setEmail("");
    setContent("");
  };

  return (
    <FormWrapper>
      <h4>Add Comment</h4>
      <Divider width="70px" />
      <Divider width="35px" />
      <StyledForm>
        <InputGroup>
          <StyledInput
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <StyledInput
            placeholder="Your Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </InputGroup>
        <StyledTextarea
          placeholder="Your Messages"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          required
        />
      </StyledForm>
      <PrimaryButton
        type="submit"
        disabled={!name || !email || !content}
        onClick={() => {
          submitForm({ name, email, content });
          clearForm();
        }}
      >
        Send
      </PrimaryButton>
    </FormWrapper>
  );
};

export default CommentForm;
