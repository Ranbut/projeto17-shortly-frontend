import styled from "styled-components";

export default function Record({ record }){

    const { name, links, views } = record;

    return(
    <Text>
        {name} - {links} links - {views} visualizações
    </Text>
    );
}

export const Text = styled.li`
    margin-top: 13px;
`