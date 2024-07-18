import { UserI } from 'entities/user';

export enum ArticleView {
    COMPACT = 'compact',
    DETAILED = 'detailed',
}

export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBaseI {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlockI extends ArticleBlockBaseI {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface ArticleCodeBlockI extends ArticleBlockBaseI {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlockI extends ArticleBlockBaseI {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export type ArticleBlockI =
    | ArticleTextBlockI
    | ArticleCodeBlockI
    | ArticleImageBlockI;

export enum ArticleType {
    ALL = 'All',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface ArticleI {
    id: string;
    user?: UserI;
    userId?: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlockI[];
}
