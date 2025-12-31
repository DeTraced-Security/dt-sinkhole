#!/usr/bin/env bash

case "$VERCEL_GIT_COMMIT_REF" in
  main|develop)
    exit 1
    ;;
  *)
    exit 0
    ;;
esac
