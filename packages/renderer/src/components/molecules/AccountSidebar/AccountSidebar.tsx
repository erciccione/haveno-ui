// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import { createStyles, Box, Title } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { SecondarySidebar } from "@molecules/SecondarySidebar";
import { LangKeys } from "@constants/lang";
import { WIDTH } from "./_constants";
import { useGetAccountSidebarMenu } from "./_hooks";
import { AccountSidebarItem } from "./AccountSidebarItem";

export function AccountSidebar() {
  const { classes } = useStyles();

  const menu = useGetAccountSidebarMenu();

  return (
    <Box className={classes.accountSidebar}>
      <Title className={classes.title} order={3}>
        <FormattedMessage id={LangKeys.AccountTitle} defaultMessage="Account" />
      </Title>

      <SecondarySidebar>
        {menu.map((item) => (
          <AccountSidebarItem
            key={item.label}
            label={item.label}
            route={item.route}
          />
        ))}
      </SecondarySidebar>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  accountSidebar: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    minWidth: WIDTH,
  },
  title: {
    marginBottom: theme.spacing.md,
  },
}));