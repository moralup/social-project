import { createSelector } from '@reduxjs/toolkit';
import { getAddCommentForm } from '../getAddCommentForm';

export const getText = createSelector(getAddCommentForm, state => state?.text ?? '');
