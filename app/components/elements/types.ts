export interface MenuIconProps {
    type?: 'fill' | 'outline';
    view?: 'mobile' | 'desktop'
}

export type FeaturedCollectionsDataType = {
    id: number;
    title: string;
    image: any;
    url: string;
}

export type  ButtonVariantType =  {
    variant:"text" | 'outlined' | 'contained'
}